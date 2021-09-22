export default function getRating(rating) {
    if(rating >= 7) {
       return refs.rating.classlist.add('green');
    } else if (rating > 5) {
        return refs.rating.classlist.add('orange');
    } else {
        return refs.rating.classlist.add('red');
    }
}