<p align="center">
  <img src="https://raw.githubusercontent.com/joakimmohn/diplomat/master/hs.jpg" width="400"/>
</p>

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