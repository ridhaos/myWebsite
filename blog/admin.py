from django.contrib import admin
from .models import *


# Make admin page more readable
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status', 'author', 'created_at')
    list_filter = ('created_at',)
    search_fields = ['title', 'content']

    def save_model(self, request, obj, form, change):
        obj.title = obj.title.title()
        return super().save_model(request, obj, form, change)

# Register your models here.
admin.site.register(Post, PostAdmin)


