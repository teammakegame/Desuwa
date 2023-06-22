export default class Constant {
    public static Schema = new class Schema {
        Category: string = 'Category';
        Member: string = 'Member';
        All: string[] = [this.Category, this.Member];
    }
}