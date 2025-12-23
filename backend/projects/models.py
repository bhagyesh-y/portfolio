from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    short_description = models.TextField()
    tech_stack = models.CharField(max_length=300)
    live_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
