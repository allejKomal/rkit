import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { userProfileList } from '@/constants';

const NotesCard = () => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Product Launch Debrief</CardTitle>
        <CardDescription>
          Summary of key takeaways from the September product launch.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <p>The team reviewed performance metrics and gathered initial customer feedback.</p>
        <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
          <li>Over 5,000 users signed up within the first 72 hours of launch.</li>
          <li>Initial bug reports focused on login issues and mobile UI glitches.</li>
          <li>Marketing campaign achieved a 12% conversion rate—above the 8% target.</li>
        </ol>
      </CardContent>
      <CardFooter>
        <div className="flex -space-x-2 hover:space-x-1">
          {userProfileList.map((avatar, index) => (
            <Avatar
              key={index}
              className="ring-background ring-2 transition-all duration-300 ease-in-out"
            >
              <AvatarImage src={avatar.url} alt={avatar.name} />
              <AvatarFallback className="text-xs">{avatar.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default NotesCard;
