from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = "__all__"
    
    def validate_message(self, value):
        if len(value) < 10:
            raise serializers.ValidationError("Message too short.")
        return value    