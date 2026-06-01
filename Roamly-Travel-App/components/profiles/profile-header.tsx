import { MapPin } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { UserProfile } from "@/types/app";

export function ProfileHeader({ profile }: { profile: UserProfile }) {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Avatar src={profile.avatarUrl} alt={profile.fullName} className="h-24 w-24" />
          <div>
            <p className="text-sm font-semibold text-coast">@{profile.username}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink">{profile.fullName}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">{profile.bio}</p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-ink/50">
              <MapPin size={16} /> {profile.homeCity}
            </p>
          </div>
        </div>
        <Button variant="secondary">Follow</Button>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/10 pt-5 text-center sm:max-w-md">
        <div>
          <p className="text-xl font-bold text-ink">{profile.followers.toLocaleString()}</p>
          <p className="text-xs font-medium text-ink/50">Followers</p>
        </div>
        <div>
          <p className="text-xl font-bold text-ink">{profile.following}</p>
          <p className="text-xs font-medium text-ink/50">Following</p>
        </div>
        <div>
          <p className="text-xl font-bold text-ink">{profile.travelStyles.length}</p>
          <p className="text-xs font-medium text-ink/50">Styles</p>
        </div>
      </div>
    </section>
  );
}
