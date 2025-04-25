from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import BlogsSerializer
from .models import Blogs
from django.contrib.auth.models import User

# Create your views here.

class Blog(APIView):
    permission_classes = [IsAuthenticated]

    def post(self,request):
        data=request.data
        user=request.user
        data["user"]=User.objects.get(username = user).id
        
        
        serializer=BlogsSerializer(data=data)
        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data)
        return Response(serializer.error_messages)
    
    def get(self,request):
        user=request.user

        all_task = Blogs.objects.filter(user=user)
        serializer = BlogsSerializer(all_task, many=True)
        return Response(serializer.data)
    
class SignUp(APIView):
    def post(self,request):
        data=request.data 

        username = data['username']
        password = data['password']

        User.objects.create_user(username=username,password=password)

        return Response({
            "username" : username,
            "password" : password,
        })
