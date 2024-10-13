package quicknews.javacode;

public abstract class Polygon {
    abstract void clacArea();

    abstract void clacPerimeter();

    public void display() {
        System.out.println("your Area of a poly gon is --> ");
    }
}

 class square extends Polygon {

    float side;

    public square(float side) {
        this.side = side;
    }

    void clacArea() {
        System.out.println(side * side);
    }

    void clacPerimeter() {
        System.out.println(4 * side);
    }

    display() {
       
        clacArea();
        clacPerimeter();
        System.out.println("Your Area of a Square is --> ");
    }

}

public class rectangle extends Polygon {

    int len;
    int bre;

    public rectangle(int len, int bre) {
        this.len = len;
        this.bre = bre;
    }

    void clacArea() {
        System.out.println(len*bre);
    }


    void clacPerimeter() {
        System.out.println(2*(len+ bre));
    }

    public display() {
        clacArea();
        clacPerimeter();
        System.out.println("Your Area of a Square is --> ");
       
    }

}