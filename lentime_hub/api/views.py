from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse
from django.http import JsonResponse
from . import models, serializers

# Create your views here.

class BlogPostView(generics.ListAPIView):
    queryset = models.BlogPost.objects.all()
    serializer_class = serializers.BlogPostSerializer


def main(request):
    return render(request, 'docs.html')

def noURL(request):
    return render(request, 'noURL.html')

# def blogs(request):
#     """
#     old and not as safe version of creating a json response
#     """
#     data = list(models.BlogPost.objects.values())
#     return JsonResponse(data, safe=False)
