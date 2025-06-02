from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class PingView(APIView):
    def get(self, request):
        return Response({"status": "ok"})

class HolaMundoView(APIView):
    def get(self, request):
        return Response({'mensaje': 'Hola desde la API'})