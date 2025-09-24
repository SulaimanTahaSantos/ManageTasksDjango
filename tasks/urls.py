from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tasks import views
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

router = DefaultRouter()
router.register(r"tasks", views.TaskView, 'tasks')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]