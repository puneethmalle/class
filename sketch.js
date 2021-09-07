var s1,s2,s3;
function setup() {
  createCanvas(400,400);
  s1 = new Student("Puneeth",12,"male");
  s1.display();
  s2 = new Student("bob",9,"male");
  s2.display();
  s3 = new Student("Alyss",13,"female");
  s3.display();
}

function draw() 
{
  background(30);
  
}