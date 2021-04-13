# Collapsible-list
A very simple pure JavaScript plugin to expand and collapse nested html list!

# How to use
To make any list collapsible only give `.collapsible` class to desired `ul` tag!

For example, i want this list to have collapsible elements so i just give it a
`.collapsible` class:

```html
<ul class=.collapsible">
   <li>helllo</li>
</ul>
```

Now create **multi level list** as: 

```html
<ul class=.collapsible">
    <li> Cities
        <ul>
            <li>karachi</li>
        </ul>
    </li>
```

Now when you run it, it will not collapse your multi level list! So just add `span` around mult level `li`'s text as:

```html
<ul class=.collapsible">
    <li> <span>Cities</span>
        <ul>
            <li>karachi</li>
        </ul>
    </li>
```
Now it will work perfectly ;)

You can add infinite levels to your list and it will work flawlessly!
```html
<ul class=.collapsible">
    <li> <span>Cities</span>
        <ul>
            <li><span>karachi</span>
                <ul>
                    <li>North</li>
                </ul>
            </li>
        </ul>
    </li>
```
