from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Blogs(models.Model):
    blog = models.TextField(default="None")
    date = models.DateField(auto_now_add=True,null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)

    
