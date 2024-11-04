from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Post
import markdown

# Create your views here.
class HomePage(ListView):

    template_name = 'blog/index.html'
    model = Post

    def get_queryset(self):
        return Post.objects.filter(status=1).order_by('-created_at')

class PostList(ListView):

    template_name = 'blog/post_list.html'
    model = Post

    def get_queryset(self):
        return Post.objects.filter(status=1).order_by('-created_at')
    
class PostDetailView(DetailView):

    model = Post
    template_name = 'blog/post_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        md = markdown.Markdown(extensions=["fenced_code", 'tables'])
        context['post'].content = md.convert(self.get_object().content)
        print(context['post'].content)

        return super().get_context_data(**kwargs)


