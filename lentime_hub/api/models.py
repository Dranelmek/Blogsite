from django.db import models

# Create your models here.
class BlogPost(models.Model):
    """
    This model will handel data for
    the blogs section of the website.
    """

    name = models.CharField(max_length=80, default="", unique=True, primary_key=True)
    body = models.CharField(max_length=500, default="")
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="files/blogs/images")
    pin = models.BooleanField(default=False)