from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import BlogsSerializer

# Create your views here.

class Blog(APIView):
    def post(self,request):
        data=request.data
        user=request.user
        
        
        serializer=BlogsSerializer(data=data)
        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data)
        return Response(serializer.error_messages)
    
    def get(self,request):
        return Response({"heelll":1})