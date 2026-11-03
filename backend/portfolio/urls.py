from django.urls import path
from .views import health, ContactMessageCreateView

urlpatterns = [
    path("health/", health, name="health"),
    path("contact/", ContactMessageCreateView.as_view(), name="contact"),
]
