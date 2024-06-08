from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('apis.urls')),
    path('account/', include('user_app.urls')),
    
    #path("api-auth/", include('rest_framework.urls')),    #This is for temporary login purpose
]


if settings.DEBUG :
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
