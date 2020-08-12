import { Collection } from '../models/Collection';
import { User, UserProps } from '../models/User';

export abstract class CollectionView {
  regions: { [key: string]: Element } = {};
  collection = new Collection<User, UserProps>(
    'http://localhost:3000/users',
    (json: UserProps) => User.buildUser(json)
  );

  regionsMap(): { [key: string]: string } {
    return {};
  }

  abstract renderItem(): void;
  render(): void {
    this.collection.on('change', () => {
      this.renderItem();
    });
  }
}
