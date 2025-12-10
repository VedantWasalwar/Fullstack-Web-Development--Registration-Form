from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        # ✅ Check if email already exists
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists!'}, status=400)

        # ✅ Create the user
        user = User.objects.create(name=name, email=email, password=password)
        return JsonResponse({'message': 'User registered successfully!', 'user': user.name}, status=200)

    return JsonResponse({'error': 'Invalid request method'}, status=400)
