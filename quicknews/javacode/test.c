#include <stdio.h>

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

void printDoublyLinkedList(struct Node* head) {
    printf("[%d|%p|%p]", head->data, (void*)head->prev, (void*)head->next);
    if (head->next == NULL) {
        printf("\n");
        return;
    }
    printf("-->");
    printDoublyLinkedList(head->next);
}

int main() {
    printf("23BIT255 ~~ divyesh moraniya\n");
    struct Node n1, n2, n3, n0;
    n1.data = 5;
    n1.next = &n2;
    n1.prev = &n0;
    n2.data = 10;
    n2.next = &n3;
    n2.prev = &n1;
    n3.data = 15;
    n3.next = NULL;
    n3.prev = &n2;
    n0.data = 1;
    n0.next = &n1;
    n0.prev = NULL;
    printf("Doubly Linked List: ");
    printDoublyLinkedList(&n0);
    return 0;
}