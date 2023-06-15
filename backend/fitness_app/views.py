from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import App_User

# Create your views here.
def react_index(request, route=None):
    # Grabs index from React app
    index = open('../static/index.html')
    return HttpResponse(index)

@api_view(['POST'])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    first_name = request.data['firstName']
    last_name = request.data['lastName']
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    try:
        # Creates new user
        new_user = App_User.objects.create_user(username = email, email = email, first_name = first_name, last_name = last_name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        return JsonResponse({'success':True})
    except Exception as e:
        print(e)
        return JsonResponse({'success':False})
    
@api_view(['POST'])
def user_log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email, password = password)
    if user is not None and user.is_active:
        try: 
            # Creates Session ID
            login(request._request, user)
            print(user)
            return JsonResponse({'user': {
                'email': user.email, 'first_name': user.first_name, 'last_name': user.last_name}, "login":True})
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    return JsonResponse({'login':False})