from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title","is_featured","created_at")
    list_filter = ("is_featured",)
    search_fields = ("title","tech_stack")
