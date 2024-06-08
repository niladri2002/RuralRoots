# serializers.py
from rest_framework import serializers
from .models import Product, CartItem, Shop


class ProductSerializer(serializers.ModelSerializer):
    
    tag = serializers.StringRelatedField()
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'tag', 'image']
        
class ProductSerializerForCart(serializers.ModelSerializer):
    
    tag = serializers.StringRelatedField()
    shop = serializers.StringRelatedField()
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'tag', 'shop', 'image']
        
class ShopSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Shop
        fields = ['id', 'name', 'products']  # Include other fields as needed
        
class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializerForCart()

    class Meta:
        model = CartItem
        fields = ['product', 'quantity']
