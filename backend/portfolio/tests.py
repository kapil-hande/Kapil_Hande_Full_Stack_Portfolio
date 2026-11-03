from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import ContactMessage


class PortfolioApiTests(APITestCase):
    def test_health_endpoint(self):
        response = self.client.get(reverse("health"))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["status"], "ok")

    def test_contact_endpoint_persists_valid_message(self):
        response = self.client.post(
            reverse("contact"),
            {
                "name": "  Kapil Hande  ",
                "email": "kapil@example.com",
                "subject": "  Portfolio enquiry  ",
                "message": "  I would like to discuss a project.  ",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)
        message = ContactMessage.objects.get()
        self.assertEqual(message.name, "Kapil Hande")
        self.assertEqual(message.subject, "Portfolio enquiry")
        self.assertEqual(message.message, "I would like to discuss a project.")

    def test_contact_endpoint_rejects_invalid_message(self):
        response = self.client.post(
            reverse("contact"),
            {
                "name": "K",
                "email": "not-an-email",
                "subject": "Hi",
                "message": "Short",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(ContactMessage.objects.count(), 0)
