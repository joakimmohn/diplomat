![alt text](https://raw.githubusercontent.com/joakimmohn/diplomat/master/hs.jpg)

# Diplomat

Minimalistic zero-dependency pub/sub module.

```
diplomat.on('some-event', (data) => {
    console.log(data);
});

diplomat.emit('some-event', {
    test: 1
});
```