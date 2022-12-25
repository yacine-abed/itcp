#include "stdio.h"
#include "stdlib.h"
typedef struct maillon{
    int val;
    struct maillon * suiv;
}maillon;
typedef maillon * Liste;
void rmDuplicated(Liste * L){
    Liste P,Q;
    P=L;
    if(P==NULL){
        while(P->suiv!=NULL){
            Q=P->suiv;
            while(Q!=NULL && P->val == Q->val){
                P->suiv=Q->suiv;
                free(Q);
                Q=P->suiv;
            }
            P=P->suiv;
        }
    }
}
int main(){

}
