let arr = [1,10,2,75,2,24,3, 123,34,6,43]

		Array.prototype.show = function()
		{
			console.log("array: " + this);
		}
		arr.show();

		Array.prototype.pop = function()
		{
			elem = this[this.length-1]
			this.length-=1
			return elem
		}
		arr.pop();
		arr.show();

		Array.prototype.push = function(...elements)
		{
			for(element of elements){
				this[this.length]=element
			}
			return this.length
		}

		le = arr.push(100,100,234,10,'fact')
		arr.show()
		console.log("le " + le)

		Array.prototype.shift = function()
		{
			elem = this[0];
			for(i=0;i<this.length-1;i++){
				this[i] = this[i+1]
			}
			this.length-=1
			return elem
		}
		console.log("deleted "+arr.shift())
		arr.show()

		Array.prototype.fill = function(element, start=0, end=this.length)
		{
			if(end>this.length){
				end=this.length
				console.log(end)
			}
			if(start>=0){
				for(i=start;i<end;i++){
					this[i]=element;
				}	
			}
			return this
		}
		arr.fill(5,3,6)
		arr.show()

		Array.prototype.unshift = function(...elements)
		{
			l = this.length-1
			console.log(elements.length)
			for(i=l;i>=0;i--)
			{
				console.log(i +" "+ (i+elements.length)+" "+ this[i])
				this[i+elements.length]=this[i]
			}
			for(i=0;i<elements.length; i++)
			{
				this[i]=elements[i]
			}
			return this.length
		}
		//console.log(arr.unshift([2,8]))
		arr.show()

		Array.prototype.concat = function(...elements)
		{
			newarr = new Array()
			for(elem of this){
				newarr.push(elem);
			}
			for(element of elements){
				if(element instanceof Array)
				{
					for(subelem of element){
						newarr.push(subelem);
					}	
				}
				else{
					newarr.push(element);
				}
			}
			return newarr
		}
		let concated = arr.concat([2,3,[4,6],5], 45)
		concated.shift()
		concated.show();

		Array.prototype.slise = function(start, end)
		{
			na = Array()
			for(i=start; i < end; i++){
				na.push(this[i])
			}
			return na
		}
		let slised = arr.slice(8,200)
		slised.show()

		Array.prototype.indexOf = function(item, from = 0)
		{
			for(i = from; i < this.length; i++){
				if(this[i] == item)
				return i;
			}
			return -1
		}
		console.log("ind of: " + arr.indexOf(5))

		Array.prototype.lastIndexOf = function(item, from = 0)
		{
			for(i = this.length-1; i >= from; i--){
					if(this[i] == item)
					return i;
				}
				return -1	
		}
		function f3(im1,im2){
			return im1<im2
		}
		Array.prototype.sort = function(func)
		{
			for(let i = 0; i < this.length; i++)
			{
				for(let j=0; j < this.length-1; j++)
				{
					if(func(this[j],this[j+1]))
					{
						[this[j],this[j+1]] = [this[j+1],this[j]]
					}
				}
			}
		}
		arr.sort((el1,el2)=> el1>el2)
		arr.show()

		Array.prototype.reverse = function()
		{
			for(i=0; i<this.length/2;i++){
				[this[i],this[this.length-1-i]]=[this[this.length-1-i], this[i]]
			}
		}
		arr.reverse()
		arr.show()

		function f(item){
			console.log("item: " + item)
		}
		Array.prototype.forEach = function(func)
		{
			for(element of this){
				func(element)
			}
		}
		arr.forEach(f)

		Array.prototype.includes = function(item)
		{
			for(element of this){
				if(element == item){
					return true;
				}
			}
			return false
		}
		console.log("is include: " + arr.includes(1))

		Array.prototype.find = function(func)
		{
			for(element of this){
				if(func(element)){
					return element
				}
			}
			return undefined
		}
		let found = arr.find(()=>element>10)
		console.log(found)

		Array.prototype.isArray = function(ar) 
		{
		    return Object.prototype.toString.call(ar) === '[object Array]';
		};

		Array.prototype.toString = function()
		{
			console.log(this.length);
			str=""
			for(this.i=0;this.i<this.length;this.i++)
			{
				if(this[this.i] instanceof Array) {//Array.(this[i])){
					console.log("true")
					str+=this[this.i].toString()
				} else {
				    str+=this[this.i]		
				}
				if(this.i != this.length-1){
					str+= ","
				}
				
			}	
			return str;
		}
		console.log(arr)
		console.log(arr.toString())