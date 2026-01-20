from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactCreateView(CreateAPIView):
    querset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
