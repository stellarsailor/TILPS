// https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.



var mergeTwoLists = function(l1, l2) {

    if(!l1 || !l2) return l1 ? l1 : l2
    
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l2, l1.next)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }

};
