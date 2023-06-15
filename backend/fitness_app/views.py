from django.http import HttpResponse

# Create your views here.
def react_index(request, route=None):
    # Grabs index from React app
    index = open('../static/index.html')
    return HttpResponse(index)