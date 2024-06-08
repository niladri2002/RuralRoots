from django.urls import path
from .views import ProductSearchAPIView, ProductDetailView, AddToCartView, UserCartItemsView

urlpatterns = [
    path("list/", ProductSearchAPIView.as_view(), name='product-list'),
    path('product/<int:product_id>/', ProductDetailView.as_view(), name='product-detail'),
    path("add-to-cart/", AddToCartView.as_view(), name='add-to-cart'),
    path("user-cart-products/", UserCartItemsView.as_view(), name='user-cart-products'),
]