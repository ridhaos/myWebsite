from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import pre_delete

STATUS = ((0, "Draft"), (1, "Published"))

# Create your models here.
class Post(models.Model):
    title       = models.CharField(max_length=256, unique=True, blank=False)
    slug        = models.SlugField(max_length=256, unique=True, blank=False)
    author      = models.ForeignKey(User, on_delete = models.CASCADE, related_name='blog_posts')
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)
    content     = models.TextField()
    tag_tech    = models.CharField(max_length=200, blank=True, null=True)
    status      = models.IntegerField(choices=STATUS, default=0)
    image       = models.ImageField(upload_to='post_images', null=False, blank=False)
    link_github = models.CharField(max_length=500, unique=True, blank=True, null=True)

    # Create Filter class for ordening shows
    class Meta():
        ordering = ['-created_at']
    
    # Create method return text field
    def __str__(self):
        return self.title
    
@receiver(pre_delete, sender=Post)
def delete_post_image(sender, instance, **Kwargs):
    instance.image.delete()




