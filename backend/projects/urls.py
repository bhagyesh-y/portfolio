from django.urls import path
from .views import ProjectListView , FeaturedProjectListView

urlpatterns = [
    path("",ProjectListView.as_view(), name="project-list"),
    path("featured/",FeaturedProjectListView.as_view()),
]
