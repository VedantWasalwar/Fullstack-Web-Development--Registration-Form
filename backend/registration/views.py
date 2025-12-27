import json
from django.http import JsonResponse
from .models import Student
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def create_user(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            student = Student.objects.create(
                first_name=data.get("first_name"),
                last_name=data.get("last_name"),
                father_name=data.get("father_name"),
                mother_name=data.get("mother_name"),
                gender=data.get("gender"),
                mobile=data.get("mobile"),
                dob=data.get("dob"),
                email=data.get("email"),
                skills=data.get("skills"),
                religion=data.get("religion"),
                nationality=data.get("nationality"),
                address=data.get("address"),
                country=data.get("country"),       # ✅ added
                state=data.get("state"),           # ✅ added
                documents=data.get("documents"),   # ✅ added
            )

            return JsonResponse({
                "message": "Saved Successfully",
                "id": student.id
            })

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=400)
