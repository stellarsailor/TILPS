// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    let current = head;
    
    while(current && current.next){
        if(current.val === current.next.val){
            current.next = current.next.next
        } else {
            current = current.next //for문처럼 다음으로 넘겨주는 작업이 필요
        }
    }
    return head
};
