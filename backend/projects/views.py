from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Project
from .serializers import ProjectSerilaizer

class ProjectListView(ListAPIView):
    queryset = Project.objects.all().order_by("created_at")
    serializer_class = ProjectSerilaizer
    
class FeaturedProjectListView(ListAPIView):
    queryset = Project.objects.filter(is_featured = True)
    serializer_class = ProjectSerilaizer
        