const store={
    count:0
}

export function incCount(){
    store.count=store.count+1;
    return store.count;
}