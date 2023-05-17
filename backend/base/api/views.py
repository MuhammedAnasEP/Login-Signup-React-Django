from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from .serializers import MyUserSerializer
from base.models import User

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):

    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

@api_view(['POST'])
def signup(request):
    data = request.data
    try:
        user = User.objects.create(
            username = data['username'],
            email = data['email'],
            password = make_password(data['password']),
            first_name = data['firstname'],
            last_name = data['lastname']
        )
        serializer = MyUserSerializer(user, many=False)
        print("serializer.data",serializer.data)
        return Response(serializer.data)
    except Exception as e:
        message = {'detail': 'username taken'}
        print(e)
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getUser(request):
    
    users = User.objects.all()
    serializer = MyUserSerializer(users,many = True)
    return Response(serializer.data)
