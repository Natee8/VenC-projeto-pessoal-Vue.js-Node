import { IUserDto } from '../../../../packages/domain/dtos/IUser.dto';
import { Users } from '../../../../packages/domain/entities/userAuthEntity';
import { Address } from '../../../../packages/domain/valuesObjects/address';
import { BirthDate } from '../../../../packages/domain/valuesObjects/birthDate';
import { Email } from '../../../../packages/domain/valuesObjects/Email';
import { State } from '../../../../packages/types/address';
import { UserRole } from '../../../../packages/types/userType';

export const mapToUsersEntity = (user: Partial<IUserDto>): Users => {
  const address = user.address
    ? new Address(
        user.address.street || '',
        user.address.number || '',
        user.address.neighborhood || '',
        user.address.city || '',
        user.address.state ? State[user.address.state as keyof typeof State] : State.SP,
        user.address.zipCode || '',
        user.address.country || ''
      )
    : new Address('', '', '', '', State.SP, '', '');

  const birthDate = user.birthDate ? new BirthDate(user.birthDate) : new BirthDate(new Date(0));
  const email = user.email ? Email.create(user.email) : Email.create('default@email.com');

  return new Users(
    user.id?.toString() || '0',
    user.name || 'Unknown',
    email,
    user.password || '',
    address,
    (user.role as UserRole) || null,
    user.ImgUrl || '',
    user.isActive ?? true,
    birthDate,
    user.createdAt || new Date(),
    user.updatedAt || new Date()
  );
};
