from rest_framework.serializers import ModelSerializer
from base.models import *

class MyUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password',]