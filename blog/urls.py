from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.HomePage.as_view(), name="index"),
    path('blog/', views.PostList.as_view(), name="post_list"),
    path('blog/<slug:slug>/', views.PostDetailView.as_view(), name="post_detail"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

