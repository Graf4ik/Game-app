import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(games, value: Array<any>) {
        return games.filter(game => {
            return game.Name.en.includes(value)
        })
    }
}