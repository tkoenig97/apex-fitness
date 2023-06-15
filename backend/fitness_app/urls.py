from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.user_sign_up, name='signup'),
    path('login/', views.user_log_in, name= 'login'),
    path('logout/', views.user_log_out, name= 'logout'),
    # path('curruser/', views.curr_user, name= 'curruser'),
    path('', views.react_index),
    path('<path:route>/', views.react_index),
]