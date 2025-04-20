from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Blogs(models.Model):
    title = models.CharField(max_length=255,default="No Title Given") 
    blog = models.TextField()
    date = models.DateField(auto_now_add=True,null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    
