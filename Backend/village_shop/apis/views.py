from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from django.db.models import Q

from django.contrib.auth.models import User
from .models import Product, Tag, Cart, CartItem, Shop
from .serializers import ProductSerializer, CartItemSerializer, ShopSerializer

class UserCartItemsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = request.user
        try:
            cart_items = CartItem.objects.filter(cart__user=user)
            serializer = CartItemSerializer(cart_items, many=True)
            return Response(serializer.data)
        except CartItem.DoesNotExist:
            return Response({"message": "User's cart is empty"}, status=404)

class AddToCartView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        
        product_id = request.data.get('product_id')

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({'error': 'Product does not exist'}, status=status.HTTP_404_NOT_FOUND)

        # Retrieve or create the user's cart
        cart, created = Cart.objects.get_or_create(user=user)

        # Create or update the cart item
        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
        if not created:
            cart_item.quantity += 1
            cart_item.save()

        return Response({'message': 'Product added to cart successfully'}, status=status.HTTP_201_CREATED)
    
    
#--------------------------------------------------------------------------------------------------------------------------------

class ProductSearchAPIView(APIView):
    def get(self, request):
        keyword = request.query_params.get('keyword', '')
        price = request.query_params.get('price', None)

        # Get all shops
        shops = Shop.objects.prefetch_related('products').all()

        # Serialize the shops along with their products
        data = []
        for shop in shops:
            # Check if the shop has any products that match the search criteria
            filtered_products = shop.products.filter(name__icontains=keyword)
            if price:
                filtered_products = filtered_products.filter(price__lte=price)

            if filtered_products.exists():
                serialized_shop = ShopSerializer(shop).data
                serialized_shop['products'] = ProductSerializer(filtered_products, many=True).data
                data.append(serialized_shop)

        return Response(data)

# class ProductListView(APIView):
    
#     def get(self, request, format=None):
#         keyword = request.query_params.get('keyword', None)
#         price = request.query_params.get('price')
        
#         if keyword:
#             products_by_tag = Product.objects.filter(tag__name__icontains=keyword)
#             products_by_name = Product.objects.filter(name__icontains=keyword)
#             products = products_by_tag | products_by_name
            
#             if price:
#                 products = products.filter(price__lte=price)
            
#             if not products.exists():
#                 return Response([])
            
#         else:
#             products = Product.objects.all()
            
#             if price:
#                 products = products.filter(price__lte=price)

#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)
    

class ProductDetailView(APIView):
    def get(self, request, product_id, format=None):
        try:
            product = Product.objects.get(id=product_id)
            serializer = ProductSerializer(product)
            return Response(serializer.data)
        except Product.DoesNotExist:
            return Response({"error": "Product does not exist"}, status=status.HTTP_404_NOT_FOUND)
