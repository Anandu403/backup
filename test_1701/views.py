from django.shortcuts import render

# Create your views here.
def testShashank(request):
	print("inside views",request)
	template = 'test.html'
	context = dict()

	return render(request, template, context)
