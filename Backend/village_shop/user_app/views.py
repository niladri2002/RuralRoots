from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status

# from rest_framework_simplejwt.tokens import RefreshToken

from user_app.serializers import RegistrationSerializer
from user_app import models


# for user registration:

@api_view(['POST',])
def registration_view(request):
    
    if request.method == 'POST':
        serializer = RegistrationSerializer(data = request.data)
        
        data = {}
        
        if serializer.is_valid():
            account = serializer.save()
            
            data['response'] = "Registraion Successful"
            
            data['username'] = account.username
            data['email'] = account.email
            
            token = Token.objects.get(user=account).key   # this will give the token related to the account created
            data['token'] = token
            
            return Response(data, status = status.HTTP_201_CREATED)  # returns the given status code instead of 200_OK
                                                                     # which is default
        
        return Response(serializer.errors)
    
    
@api_view(['POST',])
def logout_view(request):
    
    if request.method == 'POST':
        request.user.auth_token.delete()  #request.user will give the currently logged in user
        
        return Response(status = status.HTTP_200_OK)
