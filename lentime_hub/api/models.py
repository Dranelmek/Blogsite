from django.db import models

# Create your models here.
class BlogPost(models.Model):
    """
    This model will handel data for
    the blogs section of the website.
    """

    heading = models.CharField(max_length=80, default="")
    body = models.CharField(max_length=500, default="")
    date = models.DateTimeField(auto_now_add=True)