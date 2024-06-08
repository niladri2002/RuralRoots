from django.db import models
from django.contrib.auth.models import User

def product_image_upload_path(instance, filename):
    product_id = instance.id or 'default'
    return f"product/{product_id}/product_image/{filename}"

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Shop(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE, default=1)  # Default tag ID
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, default=1, related_name='products')
    image = models.ImageField(
        upload_to=product_image_upload_path,
        null=True, blank=True,
    )

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='CartItem')
    
    def __str__(self):
        return f"Cart for {self.user.username}"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    
    def __str__(self):
        return f"{self.quantity} x {self.product.name} in {self.cart.user.username}'s cart'"
