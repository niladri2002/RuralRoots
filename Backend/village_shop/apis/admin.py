from django.contrib import admin
from .models import Tag, Product, Cart, CartItem, Shop

# Register your models here.

admin.site.register(Tag)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Shop)